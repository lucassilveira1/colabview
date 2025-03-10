import { useState } from "react";
import chevronup from "../../assets/icons/charm_chevron-up.svg";
import chevrondown from "../../assets/icons/charm_chevron-down.svg";
import formatPhoneNumber from "../../masks/phone";
import { Employee } from "../../interfaces/employee";

interface EmployeeFilterProps {
    employees: Employee[];
    searchTerm: string;
}

const EmployeeFilter: React.FC<EmployeeFilterProps> = ({
    employees,
    searchTerm,
}) => {
    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

    const filteredEmployees = employees.filter((employee) =>
        [employee.name, employee.job, employee.phone.toString()].some((field) =>
            field
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .includes(
                    searchTerm
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase()
                )
        )
    );

    const toggleExpand = (id: string) => {
        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="employees">
            {filteredEmployees.map((employee) => (
                <div className="employees-list" key={employee.id}>
                    <div className="employees-data">
                        <div className="employee-header">
                            <img src={employee.image} alt={employee.name} />
                            <h3 className="employee-name">{employee.name}</h3>
                        </div>

                        <div
                            className={`employee-info ${
                                expanded[employee.id] ? "show" : ""
                            }`}
                        >
                            <div className="info-item">
                                <div className="info-title">Cargo:</div>
                                <div className="info-value">
                                    <h3>{employee.job}</h3>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-title">
                                    Data de Admissão:
                                </div>
                                <div className="info-value">
                                    <h3>
                                        {new Date(
                                            employee.admission_date
                                        ).toLocaleDateString()}
                                    </h3>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-title">Telefone:</div>
                                <div className="info-value">
                                    <h3>{formatPhoneNumber(employee.phone)}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {window.innerWidth <= 768 && (
                        <div
                            className="expand-btn"
                            onClick={() => toggleExpand(employee.id)}
                        >
                            <img
                                src={
                                    expanded[employee.id]
                                        ? chevronup
                                        : chevrondown
                                }
                                alt="Ver mais"
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default EmployeeFilter;
