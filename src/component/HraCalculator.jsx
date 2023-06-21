import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FcCalculator } from "react-icons/fc";

const HraCalculator = () => {
  const [basicSalary, setBasicSalary] = useState("");
  const [daSalary, setDaSalary] = useState("");
  const [commission, setCommission] = useState("");
  const [hraReceived, setHraReceived] = useState("");
  const [rentPaid, setRentPaid] = useState("");
  const [exemptedHra, setExemptedHra] = useState("");
  const [taxableHra, setTaxableHra] = useState("");
  const [isMetroCity, setIsMetroCity] = useState(false);

  const calculateHra = (e) => {
    e.preventDefault();

    const hraExemption = calculateHraExemption();
    const taxableHra = hraReceived - hraExemption;

    setExemptedHra(hraExemption);
    setTaxableHra(taxableHra);
  };

  const calculateHraExemption = () => {
    const isResidingInMetroCity = isMetroCity ? 0.5 : 0.4;
    const hraExemption = Math.min(
      isResidingInMetroCity * basicSalary,
      rentPaid - 0.1 * basicSalary,
      hraReceived
    );
    return hraExemption;
  };

  const resetForm = () => {
    setBasicSalary("");
    setDaSalary("");
    setCommission("");
    setHraReceived("");
    setRentPaid("");
    setIsMetroCity(false);
    setExemptedHra("");
    setTaxableHra("");
  };

  return (
    <Box py={8}>
      <Container maxW="container.md">
        <Center>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            HRA Calculator
          </Text>
        </Center>
        <form onSubmit={calculateHra}>
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Box
                w={"80%"}
                bg={"blue.300"}
                py={"20px"}
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
              >
                <Icon as={FcCalculator} w={"60px"} h={"50px"} />
                <Text color={"white"} fontWeight={"500"}>
                  HOUSE RENT ALLOWANCE
                </Text>
              </Box>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontWeight={"500"}>Basic Salary:</Td>
                <Td>
                  <FormControl>
                    <Input
                      type="number"
                      borderColor="gray.400"
                      value={basicSalary}
                      onChange={(e) => setBasicSalary(e.target.value)}
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>DA:</Td>
                <Td>
                  <FormControl>
                    <Input
                      type="number"
                      value={daSalary}
                      onChange={(e) => setDaSalary(e.target.value)}
                      borderColor="gray.400"
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Commission:</Td>
                <Td>
                  <FormControl>
                    <Input
                      type="number"
                      value={commission}
                      onChange={(e) => setCommission(e.target.value)}
                      borderColor="gray.400"
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>HRA Received:</Td>
                <Td>
                  <FormControl>
                    <Input
                      type="number"
                      value={hraReceived}
                      onChange={(e) => setHraReceived(e.target.value)}
                      borderColor="gray.400"
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Rent Paid:</Td>
                <Td>
                  <FormControl>
                    <Input
                      type="number"
                      value={rentPaid}
                      onChange={(e) => setRentPaid(e.target.value)}
                      borderColor="gray.400"
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Tick if residing in metro city:</Td>
                <Td display={"flex"}>
                  <Checkbox
                    isChecked={isMetroCity}
                    onChange={(e) => setIsMetroCity(e.target.checked)}
                  />
                  <FormLabel pl={"10px"}>(Tick if yes)</FormLabel>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Exempted HRA</Td>
                <Td>
                  <FormControl>
                    <Input
                      disabled={exemptedHra === ""}
                      type="number"
                      value={exemptedHra}
                      borderColor="gray.400"
                      disabledTextColor="black"
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Taxable HRA</Td>
                <Td>
                  <FormControl>
                    <Input
                      disabled={taxableHra === ""}
                      color={"black"}
                      type="number"
                      value={taxableHra}
                      borderColor="gray.400"
                      disabledTextColor="black"
                    />
                  </FormControl>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Button mt={4} colorScheme="red" type="submit" mr={"20px"}>
            Calculate
          </Button>
          <Button mt={4} colorScheme="blue" type="submit" onClick={resetForm}>
            Reset
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default HraCalculator;
