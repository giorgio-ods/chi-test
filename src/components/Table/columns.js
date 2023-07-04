import { CheckBox } from "@mui/icons-material"
import { Checkbox } from "@mui/material"
import { render } from "@testing-library/react"

export const COLUMNS = [
    {
        header: 'Company',
        accessorKey: 'car',
        size: 150,
        enableEditing: false
    },
    {
        header: 'Model',
        accessorKey: 'car_model',
        size: 150,
        enableEditing: false
    },
    {
        header: 'VIN',
        accessorKey: 'car_vin',
        size: 150,
        enableEditing: false
    },
    {
        header: 'Color',
        accessorKey: 'car_color',
        size: 150
    },
    {
        header: 'Year',
        accessorKey: 'car_model_year',
        size: 150,
        enableEditing: false
    },
    {
        header: 'Price',
        accessorKey: 'price',
        size: 150,
        
    },
    {
        header: 'Availability',
        accessorKey: 'availability',
        size: 150,
        Cell: ({ cell }) => {
            if (cell.renderValue() === true) { return <p>Available</p> } else
                {return <p>Not Available</p> }
        }
            // console.log(cell.renderValue())
        // cell.renderValue()
            
            
    },
    
]