import React, { useState, useEffect } from "react";
import { Box, Heading, Text, VStack, Center, Image, useColorModeValue } from "@chakra-ui/react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date("2024-06-21T23:59:59") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <Center minHeight="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <VStack spacing={8} textAlign="center" maxWidth="600px" mx="auto" p={6}>
        <Heading as="h1" size="2xl" fontWeight="extrabold">
          THESE ARE CRAZY TIMES
        </Heading>
        <Text fontSize="xl">They mandate extreme intensity.</Text>
        <Text fontSize="3xl" fontWeight="bold" color="red.500">
          It's now or never.
        </Text>
        <Text fontSize="xl">Only these things count:</Text>
        <Box>
          <Text fontSize="lg">1. Finding great people</Text>
          <Text fontSize="lg">2. Giving them freedom to execute</Text>
          <Text fontSize="lg">3. Give well thoughtout feedback</Text>
        </Box>

        <Text fontSize="4xl" fontWeight="bold">
          {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds
        </Text>
      </VStack>
    </Center>
  );
};

export default Index;
