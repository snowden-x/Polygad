const MapComponent = () => {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '70vh', 
        backgroundColor: '#f5f5f5' 
      }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.807673159549!2d-0.1569446852294922!3d5.624472395522831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c1a3b9c50d7%3A0x7f7d52b3d6e77a1f!2sEast%20Legon%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1631237751295!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowfullscreen="" 
          loading="lazy"
        ></iframe>
      </div>
    );
  }

  export default MapComponent;