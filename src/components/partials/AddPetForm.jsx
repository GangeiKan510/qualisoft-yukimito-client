import { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import UploadFile from './UploadFile';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import BasicDatePicker from './BasicDatePicker';
import AddIcon from '@mui/icons-material/Add';
import CheckMark from '../../pages/partials/CheckMark';
import Spinner from '../Spinner';

const dialogueNames = [
  {
    title: 'name',
    label: 'Pet Name'
  }, 
  {
    title: 'breed',
    label: 'Breed'
  }
];

export default function EditItemForm(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    size: '',
    birthday: null,
    vaccineUploaded: false
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Pet name is required';
    if (!formData.breed) newErrors.breed = 'Breed is required';
    if (!formData.size) newErrors.size = 'Size is required';
    if (!formData.birthday) newErrors.birthday = 'Birthday is required';
    if (!formData.vaccineUploaded) newErrors.vaccineUploaded = 'Vaccine photo is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAdd = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    await props.handleAdd();
    setIsLoading(false);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      birthday: date
    });
  };

  const handleUpload = (event) => {
    props.handleUpload(event);
    setFormData({
      ...formData,
      vaccineUploaded: true
    });
  };

  return (
    <Fragment>
      <button onClick={props.handleClickOpen} type="button" className="btn btn-primary yuki-color button-border-color" data-toggle="modal">
        <AddIcon className='me-1'/>
        Add pet
      </button>
      <Dialog open={props.open} onClose={props.handleCancel}>
        <DialogTitle>
          <Typography className='yuki-font-color' variant='h5'>
            Officially add your pet to the family!
          </Typography>
        </DialogTitle>
        <DialogContent style={{ maxWidth: '500px' }}>
          {dialogueNames.map((result) => (
            <div key={result.title} className='mt-2'>
              {errors[result.title] && <Typography color="error">{errors[result.title]}</Typography>}
              <TextField
                value={formData[result.title]}
                required
                autoComplete="off"
                autoFocus
                name={result.title}
                id="name outline-basic"
                label={result.label}
                type="text"
                variant="outlined"
                onChange={handleChange}
                style={{ width: '100%', marginBottom: '1rem'}}
              />
            </div>
          ))}
          {errors.birthday && <Typography color="error">{errors.birthday}</Typography>}
          <BasicDatePicker onDateChange={handleDateChange} />
          <FormControl fullWidth style={{ marginBottom: '1.5rem', marginTop: '1.5rem'}}>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            {errors.size && <Typography color="error">{errors.size}</Typography>}
            <Select
              style={{borderRadius: '20px'}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Size"
              onChange={handleChange}
              name='size'
              value={formData.size}
            >
              <MenuItem value={'small'}>Small</MenuItem>
              <MenuItem value={'medium'}>Medium</MenuItem>
              <MenuItem value={'large'}>Large</MenuItem>
            </Select>
          </FormControl>
          {errors.vaccineUploaded && <Typography color="error">{errors.vaccineUploaded}</Typography>}
          <span><UploadFile handleUpload={handleUpload}/></span>
          <span>{props.uploaded ? <CheckMark /> : null}</span>
        </DialogContent>
        <DialogActions>
          <Button className='button-link' onClick={props.handleCancel}>Cancel</Button>
          <Button className='button-link' onClick={handleAdd} disabled={isLoading}>
            {isLoading ? <Spinner /> : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
