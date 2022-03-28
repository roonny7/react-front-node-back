import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    SimpleList
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';




const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="Usuario" />
    </ReferenceInput>,
];


const PostTitle = ({ record }) => {
       let titulo;
       if (record.Nombre) titulo = record.Nombre;
       else if (record.Descripcion)
            titulo=record.Nombre;
        else
            titulo = record.title;
            
        return <span>Editando a :  {record ? `"${titulo}"` : ''}</span>;
};

export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    console.log({props});
    return (
        
        <List filters={postFilters} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="Nombre" />
                    <TextField source="Tipo" />
                    <TextField source="Usuario" label="Usuario del sistema" />                    
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

export const PostEdit = props => (
     
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>            
            <TextInput disabled source="id" />            
            <TextInput source="Usuario" />
            <TextInput source="Nombre" />
            <TextInput source="Password" />
            <TextInput source="Tipo" />
        </SimpleForm>
    </Edit>
    
);

export const PostCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="Usuario" isRequired />
                <TextInput required source="Tipo" />
                <TextInput required source="Nombre" />
                <TextInput required source="Password" />
            </SimpleForm>
        </Create>
    );