import { useState } from "react";

const useTruncateResTitle = (name) => {

    const [truncatedResTitle, setTruncatedResTitle] = useState('');

    const truncate = (input, length) => {
        if (input.length > length) {
          return input.substring(0, length) + '...';
        }
        return input;
      };

      useEffect(() => {
        setTruncatedResTitle(truncate(name, 20)); // Adjust the length as needed
      }, [name]);

  return truncatedResTitle;
}

export default useTruncateResTitle;