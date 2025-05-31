import { Button } from "@mantine/core";
import React from "react";

type Props = {
  isValid: boolean;
  pending: boolean;
};
const RegisterBtn = React.memo(({ isValid, pending }: Props) => {
  return (
    <Button
      fullWidth
      size="md"
      radius="md"
      type="submit"
      loading={pending}
      disabled={!isValid || pending}
      style={
        !isValid
          ? { background: "#E0E0E0", color: "#888", fontWeight: 700 }
          : {
              background:
                "linear-gradient(239.18deg, #D501C5 -28.34%, #FF7900 43.3%, #FCD500 98.05%, #7739FC 181.74%)",
              color: "#fff",
              fontWeight: 700,
            }
      }
    >
      Đăng ký
    </Button>
  );
});

RegisterBtn.displayName = "RegisterBtn";

export default RegisterBtn;
