import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    DeleteButton,    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    SimpleList
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';




const nivelesFilters = [
    <TextInput source="q" label="Buscar niveles" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="Usuario" />
    </ReferenceInput>,
];


const NivelTitle = ({ record }) => {
    console.log(record.Descripcion);
    return <span>Editando a :  {record ? `"${record.Nivel} .- ${record.Descripcion}"` : ''}</span>;
};

export const NivelesList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    console.log({props});
    
    return (
        
        <List filters={nivelesFilters} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="Nivel" />
                    <TextField source="Descripcion" />
                    <EditButton label="Editar nivel"className="btn primary" />
                    <DeleteButton label="Borrar nivel alv" />
                </Datagrid>
            )}
        </List>
    );
}

export const NivelEdit = props => (
     
    <Edit title={<NivelTitle />} {...props}>
        <SimpleForm>            
            <TextInput disabled source="id" />            
            <TextInput source="Nivel" />
            <TextInput source="Descripcion" />            
        </SimpleForm>
    </Edit>
    
);

export const NivelCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="Nivel" isRequired />
                <TextInput required source="Descripcion"  maxLength={1}/>                
            </SimpleForm>
        </Create>
    );