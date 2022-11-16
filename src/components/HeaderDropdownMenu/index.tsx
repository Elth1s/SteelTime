import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import { FC, useState } from "react"
import { IHeaderMenuItem } from "../../types/types"
import LinkRouter from "../LinkRouter";

import arrow_down_light from "../../assets/icons/arrow-down-light.svg"
import arrow_down_dark from "../../assets/icons/arrow-down-dark.svg"
import arrow_down_orange from "../../assets/icons/arrow-down-orange.svg"

const HeaderDropdownMenu: FC<IHeaderMenuItem> = (item) => {
    const { palette } = useTheme();

    const [open, setOpen] = useState<boolean>(false)

    const [onHoveredIndex, setOnHoveredIndex] = useState<number>(-1);

    const onHover = (index: number) => {
        setOnHoveredIndex(index)
    }

    return (
        <>
            <>
                <Tooltip
                    componentsProps={{
                        tooltip: {
                            sx: {
                                background: palette.background.default,
                                p: "20px 33px 11px 27px",
                                color: "inherit",
                                borderRadius: 0,
                                display: open ? "block" : "none"
                            },
                        },
                    }}
                    title={
                        <Box sx={{ "&:last-child": { mb: 0 } }} onMouseLeave={() => onHover(-1)}>
                            {item.children?.map((item, index) => {
                                return (
                                    <LinkRouter
                                        key={`header_tooltip_item_${index}`}
                                        underline="none"
                                        color={onHoveredIndex === index ? "primary" : "inherit"}
                                        to={item.link}
                                        sx={{ width: "250px" }}
                                        onMouseEnter={() => onHover(index)}
                                        onClick={() => setOpen(false)}
                                    >
                                        <Typography variant="h5" fontFamily="Jura" fontWeight="600" sx={{ mb: "15px" }}>
                                            {item.title}
                                        </Typography>
                                    </LinkRouter>
                                );
                            })}
                        </Box>
                    }
                >
                    <Box sx={{ display: "flex", alignItems: "center", mr: "30px", cursor: "pointer" }} onMouseEnter={() => setOpen(true)}>
                        <Typography variant="h5" fontFamily="Jura" fontWeight="600" color={item.isSelected ? "primary" : "inherit"} sx={{ mr: "10px" }}>
                            {item.title}
                        </Typography>
                        <img
                            src={item.isSelected ? arrow_down_orange : (palette.mode === "dark" ? arrow_down_light : arrow_down_dark)}
                            alt="arrow_down_light"
                        />
                    </Box>
                </Tooltip>
            </>
        </>
    )
}

export default HeaderDropdownMenu