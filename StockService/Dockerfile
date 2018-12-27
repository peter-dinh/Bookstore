FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["StockService.csproj", "./"]
RUN dotnet restore "./StockService.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "StockService.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "StockService.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
ENV ASPNETCORE_ENVIRONMENT development
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "StockService.dll"]
