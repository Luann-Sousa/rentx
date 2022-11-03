import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { ptBR } from './localConfig';
import { generateInterval } from './generateinterval';
import { 
  Calendar as CustomCalendar ,
  LocaleConfig,
  DateCallbackHandler,
  
} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

//interface por periodo
interface MarkedDateProps {
  [date: string]:{
    color: string;
    textColor: string;
    disabled?: boolean;
    disableToychEvent?: boolean;
  },
};
//interface do calendario
interface CalendarProps {
  makedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
};

//interface por dia selecionado
interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
};

 function Calendar({ makedDates, onDayPress }: CalendarProps){
  const theme = useTheme();
  return(
    <CustomCalendar
        renderArrow={ ( direction )=> 
          <Feather
          size={24} 
          color={theme.colors.text}
          name={ direction == 'left' ? 'chevron-left': 'chevron-right'}
          />
        }
        headerStyle={{
          backgroundColor: theme.colors.background_secundary,
          borderWidth: 0.5,
          borderBottomColor: theme.colors.text_datail,
          paddingBottom: 10,
          marginBottom: 10,
        }}
        theme={{
          textDayFontFamily: theme.fonts.primary_inter_400,
          textDayHeaderFontFamily: theme.fonts.primary_inter_500,
          textMonthFontFamily: theme.fonts.secudary_archivo_600,
          textDayHeaderFontSize: 10,
          textMonthFontSize:20,
          monthTextColor: theme.colors.title,
          arrowStyle:{
            marginHorizontal: -15
          }
        }}
        firstDay={1}
        minDate={new Date()}
        markingType='period'
        markedDates={ makedDates }
        onDayPress={ onDayPress}
    />
  );
};
export {
  Calendar,
  MarkedDateProps,
  DayProps,
  generateInterval, 
}