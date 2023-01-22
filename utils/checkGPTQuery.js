export const checkGPTQuery = async (input) => {
  input = "Which category does the following statement best fit in?" + input + "."
          + "Categories: [Travel, Education, Recreation, Other]"
          + " Only return one of the folllowing categories."
          + " If the query does not fit any of the 4 categories or does not make sense, return 'Other'";
  try {
    const response = await fetch('http://192.168.0.72:5000/gpt3verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input_text: input })
    });
  
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }
  
  
  