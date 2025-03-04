import { useGetEmployees } from "../hooks/useGetEmployee";

export const Home = () => {
    const { employees, loading } = useGetEmployees();

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>Lista de Colaboradores</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Data de Admissão</th>
                        <th>Telefone</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.job}</td>
                            <td>{employee.admission_date}</td>
                            <td>
                                <img
                                    src={employee.image}
                                    alt={employee.name}
                                    width={50}
                                    height={50}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
