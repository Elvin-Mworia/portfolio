import { useState } from "react";
import {
  Center,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  // Colors dynamically respond to the ThemeToggleButton changes
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const inputBg = useColorModeValue("white", "gray.600");
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.300", "gray.500");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast({ title: "Message sent!", status: "success", duration: 3000, isClosable: true });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={6}
      borderRadius="lg"
      bg={bgColor}
      border="1px solid"
      borderColor={borderColor}
      boxShadow="lg"
      transition="background 0.2s ease-in-out"
    >
      <FormControl isRequired mb={4}>
        <FormLabel color={textColor}>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          bg={inputBg}
          color={textColor}
          borderColor={borderColor}
          _placeholder={{ color: useColorModeValue("gray.500", "gray.300") }}
        />
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel color={textColor}>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          bg={inputBg}
          color={textColor}
          borderColor={borderColor}
          _placeholder={{ color: useColorModeValue("gray.500", "gray.300") }}
        />
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel color={textColor}>Message</FormLabel>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          bg={inputBg}
          color={textColor}
          borderColor={borderColor}
          _placeholder={{ color: useColorModeValue("gray.500", "gray.300") }}
        />
      </FormControl>
 <Center>
  
      <Button type="submit" colorScheme="blue" isLoading={loading}>
        Send Message
      </Button>
   </Center>
    </Box>
  );
};

export default ContactForm;
