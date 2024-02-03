import {useState, useEffect} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Radio } from "antd";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ConePug from "../../../assets/AddPet/ConePug.jpg";
import { InputNumber } from "antd";
import { Input } from "antd";
import { DatePicker } from "antd";
import { Upload } from "antd";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import {
  setAge,
  setWeight,
  setHeight,
  setDiet,
  setAllergies,
  setVaccinationStatus,
  setVaccinationDate,
  setMedicalHistory,
} from "../../../redux/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFormData } from "../../../redux/formSlice";

const { TextArea } = Input;

const defaultTheme = createTheme();

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function AddPetMedicalInfo() {

  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);
  
  const [formAge, setFormAge] = useState(formData.age || "");
  const [formWeight, setFormWeight] = useState(formData.weight || "");
  const [formHeight, setFormHeight] = useState(formData.height || "");
  const [formDiet, setFormDiet] = useState(formData.diet || "");
  const [formAllergy, setFormAllergy] = useState(formData.allergies || "");
  const [formVaccinationStatus, setFormVaccinationStatus] = useState(formData.vaccinationStatus || "");
  const [formVaccinationDate, setFormVaccinationDate] = useState(formData.vaccinationDate || "");
  const [formMedicalHistory, setFormMedicalHistory] = useState(formData.medicalHistory || "");

  
  useEffect(() => {
  }, [formData]);

  const [vaccination, setVaccination] = useState("Vaccinated");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleAgeChange = (value) => {
    setFormAge(value);
    dispatch(setAge(value));
  };
  
  const handleWeightChange = (value) => {
    setFormWeight(value);
    dispatch(setWeight(value));
  };
  
  const handleHeightChange = (value) => {
    setFormHeight(value);
    dispatch(setHeight(value));
  };
  
  const handleDietChange = (event) => {
    setFormDiet(event.target.value);
    dispatch(setDiet(event.target.value));
  };
  
  const handleAllergyHistoryChange = (event) => {
    setFormAllergy(event.target.value);
    dispatch(setAllergies(event.target.value));
  };
  
  const handleVaccinationChange = (value) => {
    setFormVaccinationStatus(value);
    dispatch(setVaccinationStatus(value));
  };
  
  const handleVaccinationDateChange = (date) => {
    const formattedDate = dayjs(date).format('DD/MM/YYYY');
    console.log(formattedDate);
    setFormVaccinationDate(formattedDate);
    dispatch(setVaccinationDate(formattedDate));
  };
  
  const handleMedicalHistoryChange = (event) => {
    setFormMedicalHistory(event.target.value);
    dispatch(setMedicalHistory(event.target.value));
  };
  

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    if (newFileList.length > 5) {
      newFileList.pop();
    }
    setFileList(newFileList);
  };

  const onVaccinationChange = ({ target: { value } }) => {
    setVaccination(value);
    handleVaccinationChange(value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={5}
            sx={{
              backgroundImage: `url(${ConePug})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={7}
            component={Paper}
            square
          >
            <Box
              sx={{
                my: 5,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5" className="pb-2">
                Your Pet's Medical Info
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Typography>Age</Typography>
                    <InputNumber
                      min={0}
                      max={100}
                      style={{ width: "100%" }}
                      addonAfter="year(s)"
                      onChange={handleAgeChange}
                      defaultValue={formAge}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography>Weight</Typography>
                    <InputNumber
                      min={1}
                      max={300}
                      style={{ width: "100%" }}
                      addonAfter="Kgs"
                      onChange={handleWeightChange}
                      defaultValue={formWeight}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography>Height</Typography>
                    <InputNumber
                      min={1}
                      max={1000}
                      style={{ width: "100%" }}
                      addonAfter="cms"
                      onChange={handleHeightChange}
                      defaultValue={formHeight}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Diet</Typography>
                    <div className="pt-2 pb-" style={{ width: "100%" }}>
                      <TextArea
                        rows={4}
                        placeholder="Enter the diet of your pet"
                        maxLength={100}
                        required
                        style={{ width: "100%" }}
                        onChange={handleDietChange}
                        defaultValue={formDiet}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>History of Allergies</Typography>
                    <div className="pt-2 pb-" style={{ width: "100%" }}>
                      <TextArea
                        rows={4}
                        placeholder="Enter the allergy history of your pet"
                        maxLength={100}
                        required
                        style={{ width: "100%" }}
                        onChange={handleAllergyHistoryChange}
                        defaultValue={formAllergy}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="pt-5">
                      <Radio.Group
                        options={[
                          {
                            label: "Vaccinated",
                            value: "Vaccinated",
                          },
                          {
                            label: "Not Vaccinated",
                            value: "Not Vaccinated",
                          },
                        ]}
                        onChange={onVaccinationChange}
                        optionType="button"
                        buttonStyle="solid"
                        style={{ width: "100%" }}
                        defaultValue={formVaccinationStatus}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="pb-1">
                      <Typography>
                        Date of the most recent vaccination
                      </Typography>
                    </div>
                    <DatePicker
                      style={{ width: "100%" }}
                      disabled={vaccination === "Not Vaccinated"}
                      onChange={handleVaccinationDateChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div className="pt-2">
                      <Typography>Medical History</Typography>
                      <div className="pt-2 pb-" style={{ width: "100%" }}>
                        <TextArea
                          rows={4}
                          placeholder="Enter the medical history of your pet"
                          maxLength={100}
                          required
                          style={{ width: "100%" }}
                          onChange={handleMedicalHistoryChange}
                          defaultValue={formMedicalHistory}
                        />
                      </div>
                      <div className="pt-4 pb-2">
                        <Typography>Upload any relevant documents</Typography>
                      </div>
                      <div className="w-full pb-5">
                        <Upload
                          //action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                          listType="picture"
                          defaultFileList={[...fileList]}
                        >
                          <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
