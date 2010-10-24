#include <time.h>
#include <yajl/yajl_gen.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>
void gen_number(char *f,unsigned int *l);

void gen_number(char *f, unsigned int *l) {
  long len, num,type;
  len = rand() % 1000;
  num = rand();
  type = rand() % 3;
  switch (type) {
  case 0:
    *l = sprintf(f,"%li",num);
    break;
  case 1:
    *l = sprintf(f,"%li.%li",num,num);
    break;
  case 2:
    *l = sprintf(f,"%li.%lie%li",num,num,num);
    break;
  case 3:
    *l = sprintf(f,"%li.e%li",num,num);
    break;
  }
  return;
}

int main(int argc , char **av) {
  yajl_gen_status ygs= yajl_gen_status_ok;
  yajl_gen_config c;
  yajl_gen yg;
  char ch;
  char buf[1024];
  unsigned int len;
  char stack[1024];
  c.beautify = argc;

  yg = yajl_gen_alloc(&c,NULL);
  if (!yg) { exit(1); }
  srand(time(NULL));
  while (-1 != (ch = getchar())) {
    int depth = 0;
    switch (ch) {
    default:
      if (depth > 0) break;
      ch = stack[depth]--; continue;
    case '{':
      ygs = yajl_gen_map_open(yg);
      stack[++depth] = '{';
      break;
    case '}':
    case ']':
      if (depth == 0) break;
      ch = stack[depth--];
      ygs = ch == '}' ?  yajl_gen_map_close(yg) : yajl_gen_array_close(yg);
      break;
    case 'N':
      gen_number(buf,&len);
      ygs = yajl_gen_number(yg,buf,len);
      break;
    case '[':
      ygs = yajl_gen_array_open(yg);
      stack[++depth] = '[';
    break;
    case 'b':
      ygs = yajl_gen_bool(yg,1);
      break;
    case 'B':
      ygs = yajl_gen_bool(yg,0);
      break;
    case 'S':
      gen_number(buf,&len);
      memcpy(buf,"ABCDEFG",5);
      ygs = yajl_gen_string(yg,(const char*)buf,len);
      break;
    case '\0':
      break;
    }
    if (ygs != yajl_gen_status_ok
        && ygs != yajl_gen_generation_complete) {
      exit(ygs);
    }
    if (ygs == yajl_gen_generation_complete) { break; }
  }
  if (ygs != yajl_gen_generation_complete) { exit(2); }
  {
    char *buf = NULL; 
    int len;
    yajl_gen_get_buf(yg,&buf,&len);
    if (buf) {
      write(1,buf,len);}
  }
  exit(0);
}


