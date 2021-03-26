import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import DatePicker from "react-native-datepicker";

function AppDatePicker(props) {
    const [state, setState] = useState({
        date: "2016-05-15",
    });
    return (
        <DatePicker
            style={{width: 200}}
            date={state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="1916-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36
                }
                // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {
                setState({date: date})
            }}
            onPressDate={() => console.log(this)}
        />
    )
        ;
}

const styles = StyleSheet.create({
    container: {}
});
export default AppDatePicker;

