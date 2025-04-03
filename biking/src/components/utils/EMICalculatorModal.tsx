import {
  Backdrop,
  Box,
  Fade,
  Modal,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface ModalProp {
  onRoad: string | undefined;
  bikeName: string | undefined;
  onClose: () => void;
}

const EMIModal: React.FC<ModalProp> = ({ onRoad, bikeName, onClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    "@media (max-width: 600px)": {
      width: 400,
    },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 3,
  };

  const onRoadPrice = onRoad ? Number(onRoad.replace(/,/g, "")) : 0;

  const [downPayment, setDownPayment] = useState(
    Math.round(onRoadPrice * 20) / 100
  );
  const [tenure, setTenure] = useState(3);
  const [interestRate, setInterestRate] = useState(9);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={true}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={true}>
        <Box sx={style}>
          <div>
            <div>
              <Typography fontSize={18} fontWeight={"bold"}>
                Calculate EMI for {bikeName}
              </Typography>
            </div>
            <div className="md:flex">
              <div className="md:flex-1/2">
                <div>
                  <span className="text-sm">
                    Down Payment: ₹ {downPayment.toLocaleString()}
                  </span>
                  <div className="">
                    <Slider
                      value={downPayment}
                      min={0}
                      max={onRoadPrice}
                      step={100}
                      onChange={(_e, newValue) =>
                        setDownPayment(newValue as number)
                      }
                      valueLabelDisplay="auto"
                      sx={{
                        "@media (max-width: 600px)": {
                          width: "100%",
                        },
                      }}
                    />
                    <TextField
                      value={downPayment.toLocaleString()}
                      className="border-0"
                      sx={{
                        width: 500,
                        "@media (max-width: 600px)": {
                          width: "100%",
                        },
                      }}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                    />
                    <p className="text-sm">
                      Your loan amount will be: ₹{" "}
                      {(onRoadPrice - downPayment).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="md:flex mt-2">
                  <div className="md:flex-1/2 md:pr-3">
                    <p className="text-sm">Tenure (Years)</p>
                    <Slider
                      value={tenure}
                      min={1}
                      max={7}
                      step={1}
                      onChange={(_e, newValue) => setTenure(newValue as number)}
                      valueLabelDisplay="auto"
                      sx={{
                        "@media (max-width: 600px)": {
                          width: "100%",
                        },
                      }}
                    />
                    <TextField
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full"
                      sx={{
                        "@media (max-width: 600px)": {
                          width: "100%",
                        },
                      }}
                    />
                  </div>
                  <div className="md:flex-1/2 md:pl-3">
                    <p className="text-sm">Interest (%)</p>
                    <Slider
                      value={interestRate}
                      min={5}
                      max={20}
                      step={1}
                      onChange={(_e, newValue) =>
                        setInterestRate(newValue as number)
                      }
                      valueLabelDisplay="auto"
                      sx={{
                        "@media (max-width: 600px)": {
                          width: "100%",
                        },
                      }}
                    />
                    <TextField
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full"
                      sx={{
                        "@media (max-width: 600px)": {
                          width: "100%",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex-1/2"></div>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default EMIModal;
