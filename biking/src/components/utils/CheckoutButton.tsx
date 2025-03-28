import Button from "@mui/material/Button";

interface ButtonProp {
  onClick: () => void;
}

const CheckoutButton: React.FC<ButtonProp> = ({ onClick }) => {
  return (
    <Button
      variant="text"
      color="primary"
      fullWidth
      sx={{ border: 1, marginTop: 2, borderRadius: 2 }}
      onClick={onClick}
    >
      check out
    </Button>
  );
};

export default CheckoutButton;
