"use client";
import { DatePicker, parseDate } from "@ark-ui/react/date-picker";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface AppointmentDatePickerProps {
    onDateChange?: (date: Date) => void;
    onTimeChange?: (time: string) => void;
}

export const AppointmentDatePicker = ({ onDateChange, onTimeChange }: AppointmentDatePickerProps) => {
    const [selectedTime, setSelectedTime] = useState<string>();

    const timeSlots = [
        { time: "09:00", available: false },
        { time: "09:30", available: false },
        { time: "10:00", available: true },
        { time: "10:30", available: true },
        { time: "11:00", available: true },
        { time: "11:30", available: true },
        { time: "12:00", available: false },
        { time: "12:30", available: true },
        { time: "13:00", available: true },
        { time: "13:30", available: true },
        { time: "14:00", available: true },
        { time: "14:30", available: false },
        { time: "15:00", available: false },
        { time: "15:30", available: true },
        { time: "16:00", available: true },
        { time: "16:30", available: true },
        { time: "17:00", available: true },
        { time: "17:30", available: true },
    ];

    return (
        <DatePicker.Root
            inline
            timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
            defaultValue={[parseDate(new Date()).add({ days: 3 })]}
            isDateUnavailable={(date) => {
                // Past dates are unavailable
                return date.compare(parseDate(new Date())) <= 0;
            }}
            onValueChange={(details) => {
                const dateVal = details.value[0];
                if (dateVal) {
                    const date = dateVal.toDate(Intl.DateTimeFormat().resolvedOptions().timeZone);
                    onDateChange?.(date);
                }
            }}
        >
            <DatePicker.Content className="p-6 gap-6 flex flex-col md:flex-row bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden w-full max-w-4xl">
                <DatePicker.View view="day" className="flex-1">
                    <DatePicker.Context>
                        {(api) => (
                            <>
                                <DatePicker.ViewControl className="flex items-center justify-between mb-6">
                                    <DatePicker.PrevTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300">
                                        <ChevronLeftIcon className="w-5 h-5" />
                                    </DatePicker.PrevTrigger>
                                    <DatePicker.ViewTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-1.5 rounded-lg transition-colors">
                                        <DatePicker.RangeText />
                                    </DatePicker.ViewTrigger>
                                    <DatePicker.NextTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300">
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </DatePicker.NextTrigger>
                                </DatePicker.ViewControl>
                                <DatePicker.Table className="w-full border-separate border-spacing-y-2">
                                    <DatePicker.TableHead>
                                        <DatePicker.TableRow>
                                            {api.weekDays.map((weekDay, id) => (
                                                <DatePicker.TableHeader
                                                    key={id}
                                                    className="text-base font-semibold text-gray-500 dark:text-gray-400 w-12 h-10 text-center pb-2"
                                                >
                                                    {weekDay.narrow}
                                                </DatePicker.TableHeader>
                                            ))}
                                        </DatePicker.TableRow>
                                    </DatePicker.TableHead>
                                    <DatePicker.TableBody>
                                        {api.weeks.map((week, id) => (
                                            <DatePicker.TableRow key={id}>
                                                {week.map((day, id) => (
                                                    <DatePicker.TableCell
                                                        key={id}
                                                        value={day}
                                                        className="p-0 text-center"
                                                    >
                                                        <DatePicker.TableCellTrigger className="relative w-12 h-12 text-base text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-xl transition-colors data-selected:bg-gray-900 data-selected:text-white data-selected:rounded-xl dark:data-selected:bg-gray-200 dark:data-selected:text-gray-900 data-outside-range:text-gray-400 dark:data-outside-range:text-gray-500 data-unavailable:text-gray-400 dark:data-unavailable:text-gray-500 data-unavailable:line-through data-unavailable:pointer-events-none cursor-pointer flex items-center justify-center font-medium data-today:after:content-[''] data-today:after:absolute data-today:after:bottom-1.5 data-today:after:w-1.5 data-today:after:h-1.5 data-today:after:bg-gray-900 data-today:after:rounded-full dark:data-today:after:bg-gray-300 data-selected:data-today:after:bg-white dark:data-selected:data-today:after:bg-gray-900">
                                                            {day.day}
                                                        </DatePicker.TableCellTrigger>
                                                    </DatePicker.TableCell>
                                                ))}
                                            </DatePicker.TableRow>
                                        ))}
                                    </DatePicker.TableBody>
                                </DatePicker.Table>
                            </>
                        )}
                    </DatePicker.Context>
                </DatePicker.View>
                <DatePicker.View view="month" className="flex-1">
                    <DatePicker.Context>
                        {(api) => (
                            <>
                                <DatePicker.ViewControl className="flex items-center justify-between mb-6">
                                    <DatePicker.PrevTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300">
                                        <ChevronLeftIcon className="w-5 h-5" />
                                    </DatePicker.PrevTrigger>
                                    <DatePicker.ViewTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-1.5 rounded-lg transition-colors">
                                        <DatePicker.RangeText />
                                    </DatePicker.ViewTrigger>
                                    <DatePicker.NextTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300">
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </DatePicker.NextTrigger>
                                </DatePicker.ViewControl>
                                <DatePicker.Table className="w-full border-separate border-spacing-y-2">
                                    <DatePicker.TableBody>
                                        {api
                                            .getMonthsGrid({ columns: 4, format: "short" })
                                            .map((months, id) => (
                                                <DatePicker.TableRow key={id}>
                                                    {months.map((month, id) => (
                                                        <DatePicker.TableCell key={id} value={month.value} className="text-center">
                                                            <DatePicker.TableCellTrigger className="w-20 h-14 text-base text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-xl dark:hover:bg-gray-700 rounded-xl transition-colors data-selected:bg-gray-900 data-selected:text-white data-selected:rounded-xl dark:data-selected:bg-gray-200 dark:data-selected:text-gray-900 flex items-center justify-center font-medium">
                                                                {month.label}
                                                            </DatePicker.TableCellTrigger>
                                                        </DatePicker.TableCell>
                                                    ))}
                                                </DatePicker.TableRow>
                                            ))}
                                    </DatePicker.TableBody>
                                </DatePicker.Table>
                            </>
                        )}
                    </DatePicker.Context>
                </DatePicker.View>
                <DatePicker.View view="year" className="flex-1">
                    <DatePicker.Context>
                        {(api) => (
                            <>
                                <DatePicker.ViewControl className="flex items-center justify-between mb-6">
                                    <DatePicker.PrevTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300">
                                        <ChevronLeftIcon className="w-5 h-5" />
                                    </DatePicker.PrevTrigger>
                                    <DatePicker.ViewTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-1.5 rounded-lg transition-colors">
                                        <DatePicker.RangeText />
                                    </DatePicker.ViewTrigger>
                                    <DatePicker.NextTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300">
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </DatePicker.NextTrigger>
                                </DatePicker.ViewControl>
                                <DatePicker.Table className="w-full border-separate border-spacing-y-2">
                                    <DatePicker.TableBody>
                                        {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                                            <DatePicker.TableRow key={id}>
                                                {years.map((year, id) => (
                                                    <DatePicker.TableCell key={id} value={year.value} className="text-center">
                                                        <DatePicker.TableCellTrigger className="w-20 h-14 text-base text-gray-900 dark:text-gray-100 hover:bg-gray-100 hover:rounded-xl dark:hover:bg-gray-700 rounded-xl transition-colors data-selected:bg-gray-900 data-selected:text-white data-selected:rounded-xl dark:data-selected:bg-gray-200 dark:data-selected:text-gray-900 flex items-center justify-center font-medium">
                                                            {year.label}
                                                        </DatePicker.TableCellTrigger>
                                                    </DatePicker.TableCell>
                                                ))}
                                            </DatePicker.TableRow>
                                        ))}
                                    </DatePicker.TableBody>
                                </DatePicker.Table>
                            </>
                        )}
                    </DatePicker.Context>
                </DatePicker.View>

                {/* Time Slots Section */}
                <DatePicker.Context>
                    {(api) => {
                        const selectedDate = api.value[0];
                        const dateFormatter = new Intl.DateTimeFormat("en-US", {
                            weekday: "long",
                        });
                        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                        const formattedDate = selectedDate
                            ? dateFormatter.format(selectedDate.toDate(timeZone)) +
                            ", " +
                            selectedDate.toDate(timeZone).getDate()
                            : "";

                        return (
                            <div className="border-l border-gray-200 dark:border-gray-700 w-full md:w-64 relative min-h-[400px]">
                                <div className="absolute inset-0 pl-6 overflow-y-auto">
                                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-6 shrink-0 sticky top-0 bg-white dark:bg-gray-800 py-2">
                                        {formattedDate}
                                    </h3>
                                    <div className="space-y-3 pb-6">
                                        {timeSlots.map((slot) => (
                                            <button
                                                key={slot.time}
                                                onClick={() => {
                                                    if (slot.available) {
                                                        setSelectedTime(slot.time);
                                                        onTimeChange?.(slot.time);
                                                    }
                                                }}
                                                disabled={!slot.available}
                                                className={`w-full px-4 py-3 text-base rounded-xl border transition-all duration-200 shrink-0 font-medium ${selectedTime === slot.time && slot.available
                                                        ? "bg-gray-900 text-white border-gray-900 dark:bg-gray-200 dark:text-gray-900 dark:border-gray-200 shadow-md transform scale-[1.02]"
                                                        : slot.available
                                                            ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300"
                                                            : "bg-gray-50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-600 border-gray-100 dark:border-gray-700/50 cursor-not-allowed opacity-60"
                                                    }`}
                                            >
                                                {slot.time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </DatePicker.Context>
            </DatePicker.Content>
        </DatePicker.Root>
    );
}
