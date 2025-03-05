import { useState } from "react";
import { useGetEmployees } from "../hooks/useGetEmployee";
import { SearchBar } from "../components/SearchBar/SearchBar";

export const Home = () => {
    const { employees, loading } = useGetEmployees();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredEmployees = employees.filter((employee) =>
        [employee.name, employee.job, employee.phone.toString()].some((field) =>
            field.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div>
            <h1>Funcionários</h1>

            <SearchBar value={searchTerm} onSearch={setSearchTerm} />

            {loading ? (
                <p>Carregando...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Data de Admissão</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.map((employee) => (
                            <tr key={employee.id}>
                                <td>
                                    <img
                                        src={employee.image}
                                        alt={employee.name}
                                        width={50}
                                        height={50}
                                    />
                                </td>
                                <td>{employee.name}</td>
                                <td>{employee.job}</td>
                                <td>
                                    {new Date(
                                        employee.admission_date
                                    ).toLocaleDateString()}
                                </td>
                                <td>{employee.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
