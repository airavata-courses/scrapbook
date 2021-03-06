package com.iu.scrapbook.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

/**
 * @author jyotibhushan
 */
public class DateUtil {

    public static Instant convert(String date) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");
        Date d = sdf.parse(date);
        return d.toInstant();
    }
}
