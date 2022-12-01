import { Dialog, alpha } from "@mui/material"
import { FC } from "react"

import complete from "../../assets/icons/complete.svg"

interface CompleteForm {
    open: boolean
}
const CompleteForm: FC<CompleteForm> = ({ open }) => {
    return (
        <Dialog
            open={open}
            PaperProps={{
                sx: {
                    background: alpha("#000", 0.1),
                    boxShadow: "none",
                    width: "50px"
                }
            }}
        >
            <img
                src={complete}
                alt="icon"
            />
        </Dialog >
    )
}

export default CompleteForm