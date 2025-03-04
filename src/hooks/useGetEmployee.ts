import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Employee } from "../interfaces/employee";

export const useGetEmployees = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        const getEmployees = async () => {
            try {
                const response = await api.get("/");
                setEmployees(response.data);
            } catch (error) {
                console.error("Erro ao buscar colaboradores:", error);
            } finally {
                setLoading(false);
            }
        };
        getEmployees();
    }, []);

    return { employees, loading };
};
