#include < stdio.h >

	int main(void)
{
	int D, M, A;

	scanf("%i",& D);
	scanf("%i",& M);
	scanf("%i",& A);

	if (D < 30) {
		D += 1;

	} else {
		D = 1;
		M += 1;
	}

	if (D < 10 && M < 10) {
		printf("0%i/0%i/%i\n", D, M, A);
	} else if (D < 10) {
		printf("0%i/%i/%i\n", D, M, A);
	} else {
		printf("%i/0%i/%i\n", D, M, A);
	}


	return 0;
}