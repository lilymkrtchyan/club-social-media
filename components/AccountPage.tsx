import React from 'react';
import { useState } from 'react';

const AccountPage = () => {
const [isEditMode, setIsEditMode] = useState(false);
const [clubName, setClubName] = useState('Cornell DTI');
  const [username, setUsername] = useState('@cudti');
  const [email, setEmail] = useState('dti@cornell.edu');
  const [clubDescription, setClubDescription] = useState('Our engineering project team is dedicated to more than just software development. We solve real problems around us to make our community better, while fostering our personal growth to teach others from our experience.');

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    setClubName(formData.get('clubName') as string);
    setUsername(formData.get('username') as string);
    setEmail(formData.get('email') as string);
    setClubDescription(formData.get('description') as string);
  
    setIsEditMode(false);
  };

  return (
    <div className="account-page">
      <h2>Account Information</h2>
      {isEditMode ? (
        <form onSubmit={handleSubmit} className="account-edit-form">
          <label>
            Club Name:
            <input type="text" name="clubName" />
          </label>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Email:
            <input type="email" name="email" defaultValue="example@cornell.edu" />
          </label>
          <label>
            Club Description:
            <textarea name="description" defaultValue="Our club is about...">
            </textarea>
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditMode(false)}>Cancel</button>
        </form>
      ) : (
        <div className="account-details">
          <p><strong>Club Name:</strong> {clubName}</p>
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Club Description:</strong> {clubDescription} </p>
          <button onClick={() => setIsEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
      };

export default AccountPage;