import { useState } from "react";
import { useGetEmployees } from "../hooks/useGetEmployee";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { TableHeader } from "../components/TableHeader/TableHeader";
import EmployeeFilter from "../components/EmployeeFilter/EmployeeFilter";
import "./Home.css";

export const Home = () => {
    const { employees, loading } = useGetEmployees();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <div className="container">
                    <div className="content-header">
                        <h1>Funcionários</h1>
                        <SearchBar
                            value={searchTerm}
                            onSearch={setSearchTerm}
                        />
                    </div>
                    <div className="table-container">
                        <TableHeader />
                        <div className="employee-container">
                            <EmployeeFilter
                                employees={employees}
                                searchTerm={searchTerm}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
