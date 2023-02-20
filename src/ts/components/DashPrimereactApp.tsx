import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import {DashComponentProps} from '../props';

import "primereact/resources/themes/bootstrap4-light-blue/theme.css"
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

interface City {
    name: string;
    code: string;
}

type Props = {
    // Insert props
} & DashComponentProps;

/**
 * Component description
 */
const DashPrimereactApp = (props: Props) => {
    const { id } = props;

    const [selectedCities, setSelectedCities] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            {/* @ts-ignore */}
            <MultiSelect
                value={selectedCities}
                onChange={(e: MultiSelectChangeEvent) => setSelectedCities(e.value)}
                options={cities}
                display="chip"
                optionLabel="name"
                placeholder="Select Cities"
                maxSelectedLabels={3}
                className="w-full md:w-20rem"
            />
        </div>
    );
}

DashPrimereactApp.defaultProps = {};

export default DashPrimereactApp;
