import { HeaderWrapper, Title } from "./headerStyled";
import { TextField } from "@mui/material";

export const Header = () => {
	return (
		<HeaderWrapper>
			<Title>MeteFlix</Title>
			<TextField id="filled-basic" label="Filled" variant="filled" />
		</HeaderWrapper>
	);
};
