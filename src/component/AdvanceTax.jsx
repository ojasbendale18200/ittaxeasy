import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FcCalculator } from "react-icons/fc";

function AdvanceTax() {
  const [taxPayer, setTaxPayer] = useState("Domestic Company");
  const [isSection115BAC, setIsSection115BAC] = useState(false);
  const [netTaxableIncome, setNetTaxableIncome] = useState("");
  const [relief, setRelief] = useState("");
  const [tdsTcsMatAmtCreditUtilized, setTdsTcsMatAmtCreditUtilized] =
    useState("");
  const [incomeTax, setIncomeTax] = useState("");
  const [surcharge, setSurcharge] = useState("");
  const [educationCess, setEducationCess] = useState("");
  const [secondaryCess, setSecondaryCess] = useState("");
  const [totalTaxLiability, setTotalTaxLiability] = useState("");
  const [assessedTax, setAssessedTax] = useState("");
  const [june, setJune] = useState(0);
  const [sept, setSept] = useState(0);
  const [dec, setDec] = useState(0);
  const [mar, setMar] = useState(0);

  const calculateAdvanceTax = (e) => {
    e.preventDefault();
    if (taxPayer === "Domestic Company") {
      const taxRate = isSection115BAC ? 0.25 : 0.3;
      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 10000000 ? incomeTax * 0.07 : 0;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    } else if (taxPayer === "Foreign Company") {
      const taxRate = isSection115BAC ? 0.4 : 0.5;
      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 10000000 ? incomeTax * 0.02 : 0;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    } else if (taxPayer === "Firms") {
      const taxRate = isSection115BAC ? 0.3 : 0.36;

      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 250000 ? incomeTax * 0.05 : 0;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    } else if (taxPayer === "LLP") {
      const taxRate =
        netTaxableIncome <= 250000
          ? 0
          : netTaxableIncome <= 500000
          ? 0.05
          : netTaxableIncome <= 1000000
          ? 0.2
          : 0.3;
      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 300000 ? incomeTax * 0.05 : 0;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    } else if (taxPayer === "LLP") {
      const taxRate = isSection115BAC ? 0.3 : 0.36;
      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 10000 ? incomeTax * 0.2 : 1;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    } else if (taxPayer === "HUF") {
      // const taxRate = isSection115BAC ? 0.3 : 0.36;
      const taxRate = isSection115BAC
        ? netTaxableIncome <= 250000
          ? 0
          : netTaxableIncome <= 500000
          ? 0.05
          : netTaxableIncome <= 750000
          ? 0.1
          : netTaxableIncome <= 1000000
          ? 0.15
          : netTaxableIncome <= 1250000
          ? 0.2
          : netTaxableIncome <= 1500000
          ? 0.25
          : 0.3
        : netTaxableIncome <= 250000
        ? 0
        : netTaxableIncome <= 500000
        ? 0.05
        : netTaxableIncome <= 750000
        ? 0.1
        : netTaxableIncome <= 1000000
        ? 0.15
        : netTaxableIncome <= 1250000
        ? 0.2
        : netTaxableIncome <= 1500000
        ? 0.25
        : 0.3;
      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 250000 ? incomeTax * 0.5 : 0;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    } else if (taxPayer === "Co-operative Society") {
      // const taxRate = isSection115BAC ? 0.3 : 0.36;
      const taxRate =
        netTaxableIncome <= 10000
          ? 1
          : netTaxableIncome <= 20000
          ? 0.2
          : netTaxableIncome <= 1000000
          ? 0.3
          : 0.3;
      const incomeTax = netTaxableIncome * taxRate;
      const surcharge = incomeTax > 250000 ? incomeTax * 0.5 : 0;
      const educationCess = incomeTax * 0.04;
      const secondaryCess = educationCess * 0.01;
      const totalTaxLiability =
        incomeTax + surcharge + educationCess + secondaryCess;
      const assessedTax =
        totalTaxLiability - relief - tdsTcsMatAmtCreditUtilized;

      setIncomeTax(incomeTax);
      setSurcharge(surcharge);
      setEducationCess(educationCess);
      setSecondaryCess(secondaryCess);
      setTotalTaxLiability(totalTaxLiability);
      setAssessedTax(assessedTax);
    }

    var juneTax = incomeTax * 0.15;
    var septTax = incomeTax * 0.3;
    var decTax = incomeTax * 0.3;
    var marTax = incomeTax * 0.25;

    setJune(juneTax);
    setSept(septTax);
    setDec(decTax);
    setMar(marTax);
  };

  const handleIsSection115BACChange = (e) => {
    setIsSection115BAC(e.target.value);
  };

  const handleNetTaxableIncomeChange = (e) => {
    setNetTaxableIncome(Number(e.target.value));
  };

  const handleReliefChange = (e) => {
    setRelief(Number(e.target.value));
  };

  const handleTdsTcsMatAmtCreditUtilizedChange = (e) => {
    setTdsTcsMatAmtCreditUtilized(Number(e.target.value));
  };
  const resetForm = () => {
    setTaxPayer("Domestic Company");
    setIsSection115BAC(false);
    setNetTaxableIncome(0);
    setRelief(0);
    setTdsTcsMatAmtCreditUtilized(0);
    setIncomeTax(0);
    setSurcharge(0);
    setEducationCess(0);
    setSecondaryCess(0);
    setTotalTaxLiability(0);
    setAssessedTax(0);
  };

  if (taxPayer === "Individual") {
    alert("Its under the procces, till then try others thing");
    // setTaxPayer("Domestic Company");
  }

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <form>
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
                  ADVANCE TAX CALCULATOR
                </Text>
              </Box>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontWeight={"500"}>Tax Payer</Td>
                <Td>
                  <FormControl>
                    <Select
                      placeholder="Select option"
                      borderColor="gray.400"
                      value={taxPayer}
                      onChange={(e) => setTaxPayer(e.target.value)}
                    >
                      <option value="Individual">Individual</option>
                      <option value="HUF">HUF</option>
                      <option value="AOPs/BOI">AOPs/BOI</option>
                      <option value="DomesticCompany">Domestic Company</option>
                      <option value="Firms">Firms</option>
                      <option value="LLP">LLP</option>
                      <option value="Co-operativesociety">
                        Co-operative society
                      </option>
                    </Select>
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>
                  Whether opting for taxation under Section 115BAC?
                </Td>
                <Td>
                  <FormControl>
                    <Select
                      placeholder="Select option"
                      borderColor="gray.400"
                      onChange={handleIsSection115BACChange}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Select>
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Male / Female / Senior Citizen</Td>
                <Td>
                  <FormControl>
                    <Select placeholder="Select option" borderColor="gray.400">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="SeniorCitizen">Senior Citizen</option>
                      <option value="SuperSeniorCitizen">
                        Super Senior Citizen
                      </option>
                    </Select>
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Residential Status</Td>
                <Td>
                  <FormControl>
                    <Select placeholder="Select option" borderColor="gray.400">
                      <option value="Resident">Resident</option>
                      <option value="NonResident">Non-Resident</option>
                      <option value="NonOrdinaryResident">
                        Non Ordinary Resident
                      </option>
                    </Select>
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Net Taxable Income:</Td>
                <Td>
                  <FormControl>
                    <Input
                      type="number"
                      borderColor="gray.400"
                      value={netTaxableIncome}
                      onChange={handleNetTaxableIncomeChange}
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Relief:</Td>
                <Td>
                  <FormControl>
                    <Input
                      type="number"
                      borderColor="gray.400"
                      value={relief}
                      onChange={handleReliefChange}
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>TDS/TCS/MAT (AMT) Credit Utilized:</Td>
                <Td>
                  <FormControl>
                    <Input
                      type="number"
                      borderColor="gray.400"
                      value={tdsTcsMatAmtCreditUtilized}
                      onChange={handleTdsTcsMatAmtCreditUtilizedChange}
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Income Tax:</Td>
                <Td>
                  <FormControl>
                    <Input
                      disabled={incomeTax === ""}
                      type="number"
                      borderColor="gray.400"
                      value={incomeTax}
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Surcharge:</Td>
                <Td>
                  <FormControl>
                    <Input
                      disabled={surcharge === ""}
                      type="number"
                      borderColor="gray.400"
                      value={surcharge}
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Education Cess:</Td>
                <Td>
                  <FormControl>
                    <Input
                      disabled={educationCess === ""}
                      type="number"
                      borderColor="gray.400"
                      value={educationCess}
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Secondary and Higher Education Cess:</Td>
                <Td>
                  <FormControl>
                    <Input
                      disabled={secondaryCess === ""}
                      type="number"
                      borderColor="gray.400"
                      value={secondaryCess}
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Total Tax Liability:</Td>
                <Td>
                  <FormControl>
                    <Input
                      disabled={totalTaxLiability === ""}
                      type="number"
                      borderColor="gray.400"
                      value={totalTaxLiability}
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={"500"}>Assessed Tax:</Td>
                <Td>
                  <FormControl>
                    <Input
                      disabled={assessedTax === ""}
                      type="number"
                      borderColor="gray.400"
                      value={assessedTax}
                    />
                  </FormControl>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Button
            onClick={calculateAdvanceTax}
            mt={4}
            colorScheme="red"
            type="submit"
            mr={"20px"}
          >
            Calculate
          </Button>
          <Button onClick={resetForm} mt={4} colorScheme="blue" type="submit">
            Reset
          </Button>
        </form>
      </Container>
      {incomeTax > 10000 && (
        <Box w={"80%"} m={"auto"} mt={"80px"}>
          <Text fontSize={"20px"} fontWeight={"500"}>
            Advance Tax liability
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Description</Th>
                <Th>Advance Tax Liability</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Advance tax payable upto June 15, 2023 (Cumulative)</Td>
                <Td>{june}</Td>
              </Tr>
              <Tr>
                <Td>
                  Advance tax payable upto September 15, 2022 (Cumulative)
                </Td>

                <Td>{sept}</Td>
              </Tr>
              <Tr>
                <Td>Advance tax payable upto December 15, 2022 (Cumulative)</Td>

                <Td>{dec}</Td>
              </Tr>
              <Tr>
                <Td>Advance tax payable upto March 15, 2023 (Cumulative)</Td>

                <Td>{mar}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
}

export default AdvanceTax;
