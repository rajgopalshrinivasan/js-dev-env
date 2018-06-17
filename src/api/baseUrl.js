export default function getBaseUrl() {
    const inDevelopment = window.location.href === "http://localhost:3000/";

    console.log(window.location.href); // eslint-disable-line no-console

    return inDevelopment ? 'http://localhost:3001/' : '/';
  }
  
  