import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    VStack,
    Select,
    FormErrorMessage,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useDisclosure
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // 记得引入样式
import PopupModal from './PopupModal';  // 导入弹窗组件


const BookingForm = ({ availableSlots, onSlotSelect }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [submittedData, setSubmittedData] = useState(null);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            comment: '',
            guestCount: 1,
            selectedDate: null,  // 将 selectedDate 添加到 initialValues
            selectedTime: '',
        },
        onSubmit: (values, { resetForm }) => {
            setSubmittedData(values);  // 保存提交的数据
            onOpen();  // 打开模态框
            resetForm();
        },

        validationSchema: Yup.object({
            firstName: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            guestCount: Yup.number()
                .min(1, 'At least 1 guest')
                .max(8, 'Maximum 8 guests')
                .required('Number of guests is required'),
            selectedDate: Yup.date().required("Please select date"),
            selectedTime: Yup.string().required("Please select time"),
            comment: Yup.string(),
        }),
    });

    const handleConfirm = () => {
        onClose();
    };

    return (
        <VStack w="1024px" p={8} alignItems="center" spacing={8}>
            <Heading as="h1" id="booking-section" sx={{ scrollMarginTop: '100px' }}>
                Booking
            </Heading>

            <Box p={6} rounded="md" w="100%" bg="gray.50" boxShadow="lg" borderRadius="md">
                <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={6} alignItems="stretch">
                        <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                            <FormLabel htmlFor="firstName">Name</FormLabel>
                            <Input
                                id="firstName"
                                name="firstName"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.touched.guestCount && !!formik.errors.guestCount}>
                            <FormLabel htmlFor="guestCount">Select Number of Guests</FormLabel>
                            <NumberInput
                                id="guestCount"
                                value={formik.values.guestCount}
                                onChange={(valueString) => formik.setFieldValue('guestCount', Number(valueString))}
                                min={1} // 最小值1
                                max={8} // 最大值8
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper /> {/* 加按钮 */}
                                    <NumberDecrementStepper /> {/* 减按钮 */}
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl isInvalid={formik.touched.selectedDate && !!formik.errors.selectedDate}>
                            <FormLabel htmlFor="date">Select Date</FormLabel>
                            <DatePicker
                                id="selectedDate"
                                selected={formik.values.selectedDate}
                                onChange={(date) => {
                                    formik.setFieldValue('selectedDate', date)
                                    formik.setFieldTouched('selectedDate', true, true)
                                }}
                                dateFormat="yyyy/MM/dd"
                                minDate={new Date()} // 限制只能选择今天之后的日期
                                customInput={<Input />}
                            />
                            <FormErrorMessage>{formik.errors.selectedDate}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.touched.selectedTime && !!formik.errors.selectedTime}>
                            <FormLabel htmlFor="time">Select Time</FormLabel>
                            <Select
                                id="time"
                                value={formik.values.selectedTime}
                                placeholder="Select available time slot"
                                onChange={(e) => {
                                    formik.setFieldValue('selectedTime', e.target.value);
                                    onSlotSelect(e.target.value);  // 调用父组件的 onSlotSelect
                                }}
                            >
                                {availableSlots.map((slot, index) => (
                                    <option key={index} value={slot}>
                                        {slot}
                                    </option>
                                ))}
                            </Select>

                            {formik.touched.selectedTime && formik.errors.selectedTime && (
                                <FormErrorMessage>{formik.errors.selectedTime}</FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                            <FormLabel htmlFor="comment">Your message</FormLabel>
                            <Input
                                id="comment"
                                name="comment"
                                value={formik.values.comment}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                        </FormControl>

                        <Button type="submit" colorScheme="purple" width="full">
                            Submit
                        </Button>
                    </VStack>
                </form>

                <PopupModal
                    isOpen={isOpen}
                    onClose={onClose}
                    title="Booking Successful"
                    body={`Thank you ${submittedData?.firstName}, for choosing us to provide you with the delicious italian cuisine you are about to have on ${submittedData?.selectedDate} at ${submittedData?.selectedTime}.
                    We will send an Email to: ${submittedData?.email} with all the important info.
                    Once again, we hope you will have a great experience at Little Lemon.`}
                    onConfirm={handleConfirm}
                />
            </Box>
        </VStack>
    );
};

export default BookingForm;
