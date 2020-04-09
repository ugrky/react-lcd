// in reality in the physical device
// 16 * 6 column:
// 2 * 8 rows avaiable.

// we want to treat gaps between LCD cells also writable. we want to use
// all available space as a canvas.
// 16 columns, 15 margin LEDs between cells -> 16 * 6 + 15 * 1 = 111
// 2 rows, 1 margin LED between cells -> 2 * 8 + 1 = 17
// we will exppose a 111 x 17 canvas to the user

// to arduino, we want to send 32 bytes.