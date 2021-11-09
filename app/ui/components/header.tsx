import {Box, Button, Typography} from "@material-ui/core";
import {LinkComponent} from "./navigation/LinkComponent";

export default function Header() {
    return (
        <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
            <Typography>Prestagile</Typography>
            <Box>
                <LinkComponent target="/test" child={<Button color="primary">Test</Button>}/>
            </Box>
        </Box>
    )
}