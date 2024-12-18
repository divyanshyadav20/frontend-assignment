import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const useFetchProjects = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      );

      setProjects(data);
    } catch (error) {
      toast.error("Error fetching projects!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    projects,
    fetchProjects,
  };
};

export default useFetchProjects;
