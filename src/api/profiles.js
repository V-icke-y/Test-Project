const profiles = [
    { id: 1, name: 'John Doe', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg' , description: 'Software Engineer', lat: 37.7749, lng: -122.4194 },
    { id: 2, name: 'Jane Smith', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg', description: 'Graphic Designer', lat: 34.0522, lng: -118.2437 },
    // Add more profiles as needed
  ];
  
  export const fetchProfiles = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(profiles);
      }, 1000);
    });
  };