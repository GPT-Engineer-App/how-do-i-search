import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { List, ListItem } from "@/components/ui/list";

function App() {
  const [query, setQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  // Example questions database
  const questions = ["How do I reset my password?", "How do I update my profile?", "How do I make a payment?", "How do I delete my account?", "How do I change my email address?"];

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);
    if (searchQuery.startsWith("how do i")) {
      const results = questions.filter((question) => question.toLowerCase().includes(searchQuery));
      setFilteredQuestions(results);
    } else {
      setFilteredQuestions([]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Question Search Engine</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Type your question starting with 'How do I...?'" value={query} onChange={handleSearch} />
        <List>
          {filteredQuestions.map((question, index) => (
            <ListItem key={index}>{question}</ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default App;
