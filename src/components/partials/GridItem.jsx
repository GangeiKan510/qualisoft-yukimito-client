import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default function GridItem(props) {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: 'none'
  }));

  return (
    <Item>
      {props.element}
    </Item>
  )
}