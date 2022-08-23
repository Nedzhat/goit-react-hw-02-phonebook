import styled from "styled-components";
import { Form } from 'formik';


export const MainForm = styled(Form)`
    display: table-caption;
    margin-bottom: ${p => p.theme.space[3]}px;
`;

export const BtnForm = styled.button`
    margin-top: ${p => p.theme.space[2]}px;
    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal}
    `;