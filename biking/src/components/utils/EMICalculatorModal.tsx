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
              <Typography fontSize={20} fontWeight={"bold"}>
                Calculate EMI for {bikeName}
              </Typography>
            </div>
            <div className="flex">
              <div className="flex-1/2">
                <div>
                  <span className="text-sm">
                    Down Payment: ₹ {downPayment.toLocaleString()}
                  </span>
                  <div className="">
                    <Slider
                      value={downPayment}
                      min={0}
                      max={onRoadPrice}
                      step={1}
                      onChange={(_e, newValue) =>
                        setDownPayment(newValue as number)
                      }
                      valueLabelDisplay="auto"
                    />
                    <TextField
                      value={downPayment.toLocaleString()}
                      className="border-0"
                      sx={{
                        width: 500,
                      }}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                    />
                    <span className="text-sm">
                      Your loan amount will be: ₹{" "}
                      {(onRoadPrice - downPayment).toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="flex mt-2">
                  <div className="flex-1/2 pr-3">
                    <span className="text-sm">Tenure (Years)</span>
                    <Slider
                      value={tenure}
                      min={1}
                      max={7}
                      step={1}
                      onChange={(_e, newValue) => setTenure(newValue as number)}
                      valueLabelDisplay="auto"
                    />
                    <TextField
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1/2 pl-3">
                    <span className="text-sm">Interest (%)</span>
                    <Slider
                      value={interestRate}
                      min={5}
                      max={20}
                      step={1}
                      onChange={(_e, newValue) =>
                        setInterestRate(newValue as number)
                      }
                      valueLabelDisplay="auto"
                    />
                    <TextField
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1/2 ml-2 border-l border-gray-400"></div>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default EMIModal;
