#include<stdio.h>
#include<sys/types.h>
//#include<sys/wait.h>
#include<unistd.h>
void main()
{
	int fd1[2],fd2[2],n,i,j,flag=0,pid=1;
	char readbuf[50],writebuf[50],filename[50];
	FILE *fp;
	//int pipe1=_pipe(fd1);
	//int pipe2=pipe(fd2);
	//pid_t pid=fork();
	if(pid>0)
	{
		close(fd1[0]);
		printf("\nEnter The string to check:");
		scanf("%s",filename);
		fp=fopen(filename,"w");
		fputs("filename",fp);
		fclose(fp);
		write(fd1[1],filename,sizeof(filename));
		pid=0;
		sleep(5);
		close(fd2[1]);
		read(fd2[0],readbuf,sizeof(readbuf));
		printf(" %s",readbuf);
	}
	else if(pid==0)
	{
		sleep(3);
		close(fd1[1]);
		read(fd1[0],readbuf,sizeof(readbuf));
		fp=fopen(readbuf,"r");
		n=strlen(readbuf);
		for(i=0,j=n-1;i<n/2;i++,j--)
		{
			if(readbuf[i]!=readbuf[j])
			{
				flag=1;
				break;
			}
		}
		if(flag==1)
			fputs("String is not palindrome",fp);
		else
			fputs("String is palindrome",fp);
		fgets(writebuf,sizeof(writebuf),fp);
		fclose(fp);
		close(fd2[0]);
		write(fd2[1],writebuf,sizeof(writebuf));
		pid=1;
	}
}
