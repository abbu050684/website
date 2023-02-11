// Copyright (c) 2023, Omar Habeeb and contributors
// For license information, please see license.txt

frappe.ui.form.on("Gym Membership", {
	on_submit: function(frm) {
        frappe.msgprint("Your Membership has now been initiated")
		
	},
	length: function (frm) {
        frm.set_value(
            "end_date",
            frappe.datetime.add_days(frm.doc.start_date, frm.doc.length)
        );
    },
    start_date: function (frm) {
        frm.set_value(
            "end_date",
            frappe.datetime.add_days(frm.doc.start_date, frm.doc.length)
        );
    },
    refresh: function (frm) {
        frm.set_query("plan", function () {
            return {
                filters: {
                    active: 1,
                },
            };
        });
    },
});
