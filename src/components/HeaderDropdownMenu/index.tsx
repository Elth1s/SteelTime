import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { FC, useState } from "react"
import { IHeaderMenuItem } from "../../types/types"

const HeaderDropdownMenu: FC<IHeaderMenuItem> = (item) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box onMouseLeave={handleClose}>
                <Typography variant="h4" fontFamily="Jura" fontWeight="600" onMouseOver={handleClick} sx={{ mr: "30px" }}>
                    {item.title}
                </Typography>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        onMouseLeave: handleClose
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Box>
        </>
    )
}

export default HeaderDropdownMenu