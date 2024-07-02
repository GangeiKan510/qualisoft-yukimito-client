import { Button } from "@mui/material"

export default function UploadFile(props) {
  return (
    <>
      <Button className="button-color"
        variant="contained"
        component="label"
      >
        Upload Vaccine
        <input
          name="vaccinePhoto"
          type="file"
          hidden
          onChange={props.handleUpload}
        />
      </Button>
    </>
  )
}