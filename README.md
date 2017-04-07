# Supposed behavior:

* When the icon is missing, clicking it jumps to the next label.
* When the icon is present and was clicked within last 2 seconds, clicking it jumps to the next
icon.
* When the icon is present and was not clicked within last 2 seconds, clicking turns off the icon
(shows an empty star).
* The system is interested only in label changes that lasted at least 2 seconds.

In other words clicking quickly changes the icon and if the icon is not clicked for 2 seconds we
consider that the user decided to leave the icon as it is.
