// Mock AI service for demonstration
export async function analyzeCareerGoals(goals: string): Promise<string> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Basic analysis based on keywords
  const response = generateMockResponse(goals);
  return response;
}

function generateMockResponse(goals: string): string {
  const keywords = {
    'tech': 'technology, programming, software',
    'management': 'leadership, business, MBA',
    'data': 'analytics, statistics, machine learning',
    'finance': 'banking, investment, economics',
    'marketing': 'advertising, digital marketing, brand',
  };

  let response = 'Based on your career goals, here are some recommendations:\n\n';

  // Check for keyword matches
  Object.entries(keywords).forEach(([field, terms]) => {
    const pattern = new RegExp(`(${terms.split(', ').join('|')})`, 'i');
    if (pattern.test(goals.toLowerCase())) {
      switch (field) {
        case 'tech':
          response += '• Consider pursuing a Master\'s in Computer Science or Software Engineering\n';
          response += '• Look into specialized certifications in cloud computing or cybersecurity\n';
          break;
        case 'management':
          response += '• An MBA program could help advance your leadership career\n';
          response += '• Project Management certifications might be valuable\n';
          break;
        case 'data':
          response += '• Master\'s in Data Science or Business Analytics recommended\n';
          response += '• Consider specialized courses in machine learning and AI\n';
          break;
        case 'finance':
          response += '• Master\'s in Finance or Financial Engineering could be beneficial\n';
          response += '• Look into CFA certification programs\n';
          break;
        case 'marketing':
          response += '• Master\'s in Marketing or Digital Marketing recommended\n';
          response += '• Consider specialized courses in digital analytics and brand management\n';
          break;
      }
    }
  });

  // Default response if no keywords match
  if (response === 'Based on your career goals, here are some recommendations:\n\n') {
    response += '• Consider scheduling a consultation with a career counselor\n';
    response += '• Explore graduate programs that align with your specific interests\n';
    response += '• Look into professional development workshops in your field\n';
  }

  return response;
}