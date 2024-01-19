"use client";
import { useEffect, useMemo, useState } from 'react';

import { Train } from '../lib/Train';
import { sortTrainData } from '../lib/sortUtils';
import { filterTrainData } from '../lib/filterUtils';

import TrainForm from '../components/TrainForm';
import TrainList from '../components/TrainList';
import TrainDialog from '../components/TrainDialog';
import CreateTrainButton from '../components/CreateTrainButton';
import SortButtons from '../components/SortButtons';
import TrainSearch from '../components/TrainSearch';

import { Typography } from '@mui/material';


const Trains: React.FC = () => {
  const [trainData, setTrainData] = useState<Train[]>([]);
  const [editTrain, setEditTrain] = useState<Train | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [trainToDeleteId, setTrainToDeleteId] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [departureSearchTerm, setDepartureSearchTerm] = useState<string>('');
  const [arrivalSearchTerm, setArrivalSearchTerm] = useState<string>('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/trains');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: Train[] = await response.json();
        setTrainData(data);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCreate = async (newTrain: Train) => {
    try {
      const response = await fetch('http://localhost:4000/trains', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTrain),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const createdTrain: Train = await response.json();

      setTrainData((prevData) => [...prevData, createdTrain]);
      setShowForm(false);

      console.log('New train created successfully');
    }
    catch (error) {
      console.error('Error creating new train:', error);
    }
  };

  const handleUpdate = async (trainId: number, updatedTrain: Train) => {
    try {
      const response = await fetch(`http://localhost:4000/trains/${trainId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTrain),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      setTrainData((prevData) =>
        prevData.map((train) => (train.id === trainId ? updatedTrain : train))
      );
  
      setEditTrain(null);
      setShowForm(false);
  
      console.log(`Train with ID ${trainId} updated successfully`);
    }
    catch (error) {
      console.error('Error updating train:', error);
    }
  };

  
  const confirmDelete = async () => {
    if (trainToDeleteId !== null) {
      try {
        const response = await fetch(`http://localhost:4000/trains/${trainToDeleteId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        setTrainData((prevData) => prevData.filter((train) => train.id !== trainToDeleteId));
        setTrainToDeleteId(null);
        setShowDeleteConfirmation(false);

        console.log(`Train with ID ${trainToDeleteId} deleted successfully`);
      }
      catch (error) {
        console.error('Error deleting train:', error);
      }
    }
  };

  const handleEdit = (train: Train) => {
    setEditTrain(train);
    setShowForm(true);
  };

  const handleDelete = (trainId: number) => {
    setTrainToDeleteId(trainId);
    setShowDeleteConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setTrainToDeleteId(null);
    setShowDeleteConfirmation(false);
  };

  const handleCloseForm = () => {
    setEditTrain(null);
    setShowForm(false);
  };

  const handleSort = (key: string) => {
    if (sortBy === key) {
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    }
    else {
      setSortBy(key);
      setSortOrder('asc');
    }
  };

  const handleDepartureSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureSearchTerm(event.target.value);
  };

  const handleArrivalSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalSearchTerm(event.target.value);
  };

  const sortedTrainData = useMemo(() => sortTrainData(trainData, sortBy, sortOrder), [
    trainData,
    sortBy,
    sortOrder,
  ]);

  const filteredTrainData = useMemo(
    () => filterTrainData(sortedTrainData, departureSearchTerm, arrivalSearchTerm),
    [sortedTrainData, departureSearchTerm, arrivalSearchTerm]
  );
  
  return (
    <div style={{ margin: '20px' }}>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        Train Data
      </Typography>
  
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <TrainSearch
            label="Search by Departure Place"
            value={departureSearchTerm}
            onChange={handleDepartureSearchChange}
          />
          <TrainSearch
            label="Search by Arrival Place"
            value={arrivalSearchTerm}
            onChange={handleArrivalSearchChange}
          />
        </div>
  
        <div>
          <SortButtons onSort={handleSort} sortBy={sortBy} sortOrder={sortOrder} />
        </div>
      </div>
  
      {showForm && (
        <div style={{ marginTop: '20px' }}>
          <TrainForm
            onSubmit={(formData) => {
              if (editTrain) {
                handleUpdate(editTrain.id, formData);
              }
              else {
                handleCreate(formData);
              }
            }}
            initialValues={editTrain}
            onClose={handleCloseForm}
          />
        </div>
      )}
  
      <TrainDialog
        open={showDeleteConfirmation}
        onClose={handleCloseConfirmation}
        onDelete={handleDelete}
        onConfirmDelete={confirmDelete}
      />
  
      {!showForm && <CreateTrainButton onClick={() => setShowForm(true)} />}
      <TrainList trainData={filteredTrainData} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default Trains;