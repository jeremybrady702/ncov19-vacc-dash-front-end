import React, { useContext, useState } from "react";
import DashTopper from "./DashTopper";
import VaccineTable from "./VaccineTable";
import WorldMap from "../components/WorldMap";

import { TableContext } from "../utils/TableContext/TableState";

/*
GOAL:
	* Display current country's been display as dashboard title
	 
*/
function Main() {
	const { filter } = useContext(TableContext);

	const [selectedCountry, setSelectedCountry] = useState('Global');

	return (
		<>
			<main className="ui centered grid">
				<div className="column main" style={{ marginTop: "5px" }}>
					<div className="ui stackable grid">
						<div className="two column row content">
							<div className="sixteen wide tablet eight wide computer column">
								<DashTopper selectedCountry={selectedCountry} />
								<VaccineTable />
							</div>
							<div className="sixteen wide tablet eight wide computer column">
								<div className="map-wrapper">
									<h1 style={{ color: "white" }}>
										{filter && filter.label} Dashboard
									</h1>
									<WorldMap setSelectedCountry={setSelectedCountry}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Main;
