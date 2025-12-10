import clsx from "clsx";
import React from "react";

const ExampleTest = () => {
  return (
    <React.Fragment>
      <div className={clsx(["h-screen", "bg-linear-to-br", "from-sky-900", "to-sky-400", "flex", "justify-center", "items-center", "pl-3", "pr-3"])}>
        <div className={clsx(["max-w-4xl", "bg-white", "rounded-md", "pl-5", "pr-5", "pt-5", "pb-5"])}>
          <div>
            <div>
              <strong>Fullname:</strong>&nbsp;NGUYỄN KIM ĐIỀN
            </div>
            <div>
              <strong>Position:</strong>&nbsp;FULLSTACK DEVELOPER
            </div>
            <div>
              <strong>Example test:</strong>&nbsp;ROLE MANAGEMENT
            </div>
            <div>
              <strong>Techstack:</strong>&nbsp;React + Laravel
            </div>
            <div>
              <strong>Source code:</strong>&nbsp;https://github.com/Diennk3004/MyTiximax
            </div>
          </div>
          <div>
            <div className={clsx(["mt-8"])}>
              <strong>Step1:</strong>&nbsp;git clone git@github.com:Diennk3004/MyTiximax.git
            </div>
            <div className={clsx(["mt-8"])}>
              <strong>Step2:</strong>&nbsp;Run command line below
            </div>
            <div className={clsx(["mt-2"])}>
              <blockquote>docker compose -p env_production_my_tiximax down && docker image prune -a -f && docker builder prune -a -f && docker compose -p env_production_my_tiximax -f docker-compose.env.production.yaml up -d && docker exec postgres_env_production_tiximax sh -c "psql -U root -tc \"select 1 from pg_database where datname='tiximax'\" | grep -q 1 || psql -U root -c \"create database tiximax\"" && docker exec postgres_env_production_tiximax sh -c "psql -h 0.0.0.0 -p 5432 -U root -d tiximax &lt; ./DatabaseBackup/tiximax-20251211-00h23.tar.gz"</blockquote>
            </div>
            <div className={clsx(["mt-8"])}>
              <strong>Step3:</strong>&nbsp;Access http://localhost:2512
            </div>
            <div className={clsx(["mt-8"])}>
              <strong>Step4:</strong>&nbsp;Data
            </div>
            <div className={clsx(["mt-2"])}>
              <div>User1: diennk - 246357</div>
              <div>User2: hongnt - 246357</div>
              <div>User3: dungtd - 246357</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExampleTest;
