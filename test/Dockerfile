FROM ubuntu:16.04
ENV DEBIAN_FRONTEND=noninteractive
#ENV PROVAR_HOME=/opt/provar/demo
#USER sysadmin
#WORKDIR=/opt/provar/
RUN apt-get update && apt install -y \
git \
wget \
openjdk-8-jdk \
ant \
xvfb \
unzip
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install
RUN mkdir -p /opt/provar/demo
#RUN wget https://download.provartesting.com/2.0.5/Provar_ANT_2.0.5.04.zip -P /opt/provar
#RUN unzip /opt/provar/Provar_ANT_2.0.5.04.zip -d /opt/provar
#COPY . /opt/provar/build_dir
ENTRYPOINT ["/opt/provar/script.sh"]
CMD ["AllTests"]
