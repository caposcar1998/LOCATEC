import Alert from 'react-bootstrap/Alert';

function AlertO({message, variant, showValue , setShowValue}) {
  return (
    <>
      {showValue &&
        <Alert key={variant} variant={variant} onClose={() => {setShowValue(false)}}  dismissible>
          {message}
        </Alert>   
      }
  </>
  );
}

export default AlertO;